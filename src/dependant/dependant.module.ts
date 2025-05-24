import { Module } from '@nestjs/common';
import { DependantService } from './dependant.service';
import { DependantController } from './dependant.controller';

@Module({
  imports:[],
  controllers:[DependantController],
  providers: [DependantService],
  exports:[DependantService]
})
export class DependantModule {}
