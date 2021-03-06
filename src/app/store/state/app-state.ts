import { FormDTO } from '../../dto/form-dto';
import { ResponseDTO } from '../../dto/response-dto';

export interface AppState {
  isLoading: boolean;
  formDto: FormDTO;
  responseDto: ResponseDTO;
}
