import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementUpdateWithoutUserInput } from 'prisma/generated/graphql/body-measurement/body-measurement-update-without-user.input';
import { ProfileUpdateWithoutUserInput } from 'prisma/generated/graphql/profile/profile-update-without-user.input';


@InputType()
export class UserUpdateInput {



    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;



    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    profile?: ProfileUpdateWithoutUserInput;

    @Field(() => BodyMeasurementUpdateWithoutUserInput, {nullable:true})
    measurement?: BodyMeasurementUpdateWithoutUserInput;

}
