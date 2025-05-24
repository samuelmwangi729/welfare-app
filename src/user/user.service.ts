import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    index = ():string =>{
        return "user index here"
    }
}
