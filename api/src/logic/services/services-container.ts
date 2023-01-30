import 'reflect-metadata';

import { Container } from 'inversify';

export const servicesContainer = new Container({ defaultScope: 'Singleton' });
