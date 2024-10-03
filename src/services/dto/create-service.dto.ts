import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class CreateServiceDto {
    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    typeService: string;

    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    dateEnd:Date;

    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    dateStart:Date;
}