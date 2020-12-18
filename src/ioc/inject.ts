import 'reflect-metadata';
import { Injector, rootInjector } from './injector';

export type InjectOptions = {
  provide?: any;
  injector?: Injector;
};

export function Inject(
  injectOptions?: InjectOptions,
): (_constructor: any, propertyName: string) => any {
  return (_constructor: any, propertyName: string): any => {
    const propertyType: any = injectOptions && injectOptions.provide
      ? injectOptions.provide
      : Reflect.getMetadata('design:type', _constructor, propertyName);
    const injector: Injector = injectOptions && injectOptions.injector
      ? injectOptions.injector
      : rootInjector;

    _constructor[propertyName] = injector.getInstance(propertyType);

    return (_constructor as any)[propertyName];
  };
}
