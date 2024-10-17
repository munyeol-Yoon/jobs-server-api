import { Controller, Get } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getAllJobInfo() {
    return await this.jobService.findAllJob();
  }
}
