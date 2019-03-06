import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
 
 
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
                            default:
                                this.handleDefaultError(errorObj);
                        }
                        //alert("erro inteceptor");
                        console.log("errorObj");
                        console.log(errorObj);
                       
                        return Observable.throw(errorObj);
                    })) as any;
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
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
