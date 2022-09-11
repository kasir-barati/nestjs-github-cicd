import { Transform } from 'class-transformer';
import { IsUUID } from 'class-validator';

import { toEnglishNumber } from './convert-numbers.helper';

export class IdParamValidator {
    @Transform(({ value }) => toEnglishNumber(value))
    @IsUUID()
    id: string;
}
