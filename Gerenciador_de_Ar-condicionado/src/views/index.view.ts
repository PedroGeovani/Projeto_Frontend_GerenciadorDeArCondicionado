export class Views {
  static Environment(): Promise<any> {
    return import('./Environment/index.environment.vue')
  } 
  static Register(): Promise<any> {
    return import('./RegisterEnvironment/index.register.vue')
  } 
  static Login(): Promise<any> {
    return import('./Login/index.login.vue')
  } 
  static NotFound(): Promise<any> {
    return import('./NotFound/index.notfound.vue')
  } 
  static Program(): Promise<any> {
    return import('./ShowProgram/index.program.vue')
  } 
  static Edit(): Promise<any> {
    return import('./CriateProgram/index.register.vue')
  } 
}

