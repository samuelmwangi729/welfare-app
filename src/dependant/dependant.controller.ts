import { Controller, Get } from '@nestjs/common';
import { DependantService } from './dependant.service';

@Controller('dependant')
export class DependantController {
    //inject the service provider here 
    constructor(private readonly dependantService:DependantService){}

    @Get()
    index():string {
        return this.dependantService.index()
    }
}
