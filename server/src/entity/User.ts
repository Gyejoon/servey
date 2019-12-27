import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity({
  name: 'users',
})
export default class User {
  constructor(args: Partial<User>) {
    Object.assign(this, args);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ default: '' })
  name!: string;

  @Index()
  @Column()
  username!: string;

  @Column()
  password!: string;
}
