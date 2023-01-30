import "reflect-metadata";

// import { servicesContainer } from './services-container';

let initialized = false;

export async function initServices() {
  if (!initialized) {
    initialized = true;
  }
}
