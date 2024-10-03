import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class CreatePostDto {
    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    tittle: string;
    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    datePublication: Date;
    @ApiProperty({
        description:"Una propyedad"
    })
    @IsNotEmpty()
    theme: string;
}