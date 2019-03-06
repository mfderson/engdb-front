import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { FieldMessage } from 'src/models/fieldmessage';
 
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
 
    constructor(public alertCtrl: AlertController){ }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passou no interceptor")
        return next.handle(req)
                .pipe(
                    catchError(error => {
                        let errorObj = error;
                        if (errorObj.error) { 
                           errorObj = errorObj.error;
                        }
                        if (!errorObj.status) {
                            errorObj = JSON.parse(errorObj);
                        }

                        switch (errorObj.status) {
                            case 422:
                                this.handle422(errorObj);
                                break;
                            default:
                                this.handleDefaultError(errorObj);
                                break;
                        }
                        //alert("erro inteceptor");
                        console.log("errorObj");
                        console.log(errorObj);
                       
                        return Observable.throw(errorObj);
                    })) as any;
    }

    async handle422(errorObj) {
        const alert = await this.alertCtrl.create({
            header: "Erro de validação",
            message: this.listErrors(errorObj.errors),
            backdropDismiss: false,
            buttons: [
              {
                text: "Ok"
              }
            ]
          });
        await alert.present();
    }

    async handleDefaultError(errorObj) {
        const alert = await this.alertCtrl.create({
            header: "Erro " + errorObj.status + ": " + errorObj.error,
            message: errorObj.message,
            backdropDismiss: false,
            buttons: [
              {
                text: "Ok"
              }
            ]
          });
        await alert.present();
    }

    private listErrors(messages: FieldMessage[]) : string {
        let s : string = '';
        for (var i = 0; i < messages.length; i++) {
            s = s + "<p><strong>" + messages[i].fieldName + "</strong>: " + messages[i].message + "</p>";
        }
        return s;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
