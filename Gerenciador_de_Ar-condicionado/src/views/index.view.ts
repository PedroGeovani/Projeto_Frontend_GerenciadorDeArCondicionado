export class Views {
  static ShowEnvironment(): Promise<any> {
    return import('./ShowEnvironment/index.vue')
  } 
  static ShowProgram(): Promise<any> {
    return import('./ShowProgram/index.vue')
  }  
  static Login(): Promise<any> {
    return import('./Login/index.vue')
  }  
  static NotFound(): Promise<any> {
    return import('./NotFound/index.vue')
  }
  static CreateEnvironment(): Promise<any> {
    return import('./CreateEnvironment/index.vue')
  }
  static CreateProgram(): Promise<any> {
    return import('./CriateProgram/index.vue')
  } 
}

