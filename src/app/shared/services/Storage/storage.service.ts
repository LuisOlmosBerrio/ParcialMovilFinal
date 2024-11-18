import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.SUPABASE_CONFIG.url, environment.SUPABASE_CONFIG.publicKey);
  }

  // Subir una imagen al bucket
  async uploadImage(bucket: string, filePath: string, file: File): Promise<any> {
    const { data, error } = await this.supabase.storage.from(bucket).upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,       
    });
    if (error) throw error;
    return data;
  }

  // Obtener la URL pública de un archivo
  async getPublicUrl(bucket: string, filePath: string): Promise<string> {
    const { data } = await this.supabase.storage.from(bucket).getPublicUrl(filePath);
    if (data) {
      return data.publicUrl;
    }
    throw new Error('Error retrieving public URL');
  }
}
