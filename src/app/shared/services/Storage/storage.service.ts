import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';
import { SupabaseUploadResponse } from '../../../interfaces/supabase.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.SUPABASE_CONFIG.url, environment.SUPABASE_CONFIG.publicKey);
  }

  //subir una imagen
  async uploadImage(bucket: string, filePath: string, file: File): Promise<SupabaseUploadResponse> {
    try {
      const { data, error } = await this.supabase.storage.from(bucket).upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

      if (error) {
        throw new Error(`Error uploading file: ${error.message}`);
      }

      return data as SupabaseUploadResponse;
    } catch (error) {
      console.error('Error in uploadImage:', error);
      throw error;
    }
  }

  async getPublicUrl(bucket: string, filePath: string): Promise<string> {
    const { data } = await this.supabase.storage.from(bucket).getPublicUrl(filePath);
  
    if (!data) {
      throw new Error('No data returned from Supabase');
    }

    return data.publicUrl;
  }
  
}
