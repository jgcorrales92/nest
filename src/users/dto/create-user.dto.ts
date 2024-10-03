import { IsNotEmpty, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "./create-profile.dto";
import { ApiBody, ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description:"Una propyedad"
    })
    @MinLength(6)
    @MaxLength(18)
    @IsNotEmpty()
    passwd: string;

    @ApiProperty({
        description:"Una propyedad"
    })
    
    @IsNotEmpty()
    passport: string;

    @ApiProperty({
        description:"Una propyedad"
    })
    @IsOptional()
    profile?:CreateProfileDto
}
