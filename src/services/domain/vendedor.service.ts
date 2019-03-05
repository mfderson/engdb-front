import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { VendedorViewDTO } from 'src/models/vendedor.view.dto';

@Injectable()
export class VendedorService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<VendedorViewDTO[]> {
        return this.http.get<VendedorViewDTO[]>(`${API_CONFIG.baseUrl}/vendedores/page`);
    }
}