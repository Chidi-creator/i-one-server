import { Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller('sessions')
@UseGuards(JwtAuthGuard)
export class SessionsController {
    
}