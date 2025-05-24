import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './member/member.controller';
import { Member } from './member/member';
import { MemberModule } from './member/member.module';
import { ProgramController } from './program/program.controller';
import { Program } from './program/program';
import { ProgramModule } from './program/program.module';
import { PaymentController } from './payment/payment.controller';
import { Payment } from './payment/payment';
import { PaymentModule } from './payment/payment.module';
import { ReportingController } from './reporting/reporting.controller';
import { Reporting } from './reporting/reporting';
import { ReportingModule } from './reporting/reporting.module';
import { DependantController } from './dependant/dependant.controller';
import { Dependant } from './dependant/dependant';
import { DependantModule } from './dependant/dependant.module';
import { UserController } from './user/user.controller';
import { User } from './user/user';
import { UserModule } from './user/user.module';

@Module({
  imports: [MemberModule, ProgramModule, PaymentModule, ReportingModule, DependantModule, UserModule],
  controllers: [AppController, MemberController, ProgramController, PaymentController, ReportingController, DependantController, UserController],
  providers: [AppService, Member, Program, Payment, Reporting, Dependant, User],
})
export class AppModule {}
