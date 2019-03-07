import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { VendedorViewDTO } from 'src/models/vendedor.view.dto';
import { VendedorNewDTO } from 'src/models/vendedor.new.dto';
import { VendedorUpdtDTO } from 'src/models/vendedor.updt.dto';

@Injectable()
export class VendedorService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<VendedorViewDTO[]> {
        return this.http.get<VendedorViewDTO[]>(`${API_CONFIG.baseUrl}/vendedores/page`);
    }

    insert(obj: VendedorNewDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/vendedores`, obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    update(id: string, obj: VendedorUpdtDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/vendedores/`, obj, 
        {
            observe: 'response',
            responseType: 'text'
        });
    }
}