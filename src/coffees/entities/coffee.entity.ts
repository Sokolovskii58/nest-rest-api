import { Column, Entity, JoinTable, ManyToMany, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @Column( { nullable: true } )
        description: string;

        @Column()
        brand: string;

        @Column({default: 0})
        reccomendations: number;

        @JoinTable()
        @ManyToMany(
                type => Flavor,
                flavor => flavor.coffees, 
                {
                        cascade: true,
                }) 
        flavors: Flavor[];
}