import { PartialType } from "@nestjs/mapped-types";
import { CreatesUserDto } from './creates-user.dto';

export class UpdateUserDto extends PartialType(CreatesUserDto){}
