import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProfileDto {
    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    lastName: string;
}
