import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @ManyToMany(
                type => Coffee, // класс на который мы ссылаемся
                coffee => coffee.flavors, // ссылка по которой нужно ссылаться
        )
        coffees: Coffee[];
}
