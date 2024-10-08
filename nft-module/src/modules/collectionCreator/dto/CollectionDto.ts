import { IsNotEmpty, Matches, Length, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class Metadata {
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9 ]*$/, {
    message: "Name can only contain numbers, characters, and spaces",
  })
  name: string;
  @IsOptional()
  @Matches(/^[a-zA-Z0-9 ]*$/, {
    message: "metadata can only contain numbers, characters, and spaces",
  })
  metadata: string;
  @IsOptional()
  @Matches(/^[a-zA-Z0-9 ]*$/, {
    message: "Image path can only contain numbers, characters, and spaces",
  })  
  image: string;
}

export class CollectionDto {
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: "Address can only contain numbers and characters",
  })
  owner: string;
  @IsNotEmpty()
  @ValidateNested() // Ensure that nested objects are validated
  @Type(() => Metadata) // Required for class-transformer to handle nested objects
  meta: Metadata;
}
