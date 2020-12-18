export class Injector {
  public parentInjector: Injector;

  private readonly providerMap: Map<any, any> = new Map();

  private readonly instanceMap: Map<any, any> = new Map();

  public setProvider(key: any, value: any): void {
    if (!this.providerMap.has(key)) this.providerMap.set(key, value);
  }

  public getProvider(key: any): { injector: Injector; provider: any } {
    if (this.providerMap.has(key)) {
      return {
        injector: this,
        provider: this.providerMap.get(key),
      };
    }
    if (this.parentInjector) {
      return this.parentInjector.getProvider(key);
    }
    return {
      injector: undefined,
      provider: undefined,
    };
  }

  public setInstance(key: any, value: any): void {
    if (!this.instanceMap.has(key)) this.instanceMap.set(key, value);
  }

  public getInstance(key: any): any {
    const { injector, provider } = this.getProvider(key);

    if (this.instanceMap.has(key)) {
      return this.instanceMap.get(key);
    }
    if (injector && provider) {
      const providerInstance = new provider();
      injector.setInstance(key, providerInstance);
      return providerInstance;
    }
    if (this.parentInjector) {
      return this.parentInjector.getInstance(key);
    }
    return undefined;
  }

  public fork(): Injector {
    const childInjector = new Injector();
    childInjector.parentInjector = this;
    return childInjector;
  }
}

export const rootInjector = new Injector();
