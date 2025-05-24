import { Injectable } from '@nestjs/common';

@Injectable()
export class DependantService {
    index = ():string =>{
        return "dependants here"
    }
}
