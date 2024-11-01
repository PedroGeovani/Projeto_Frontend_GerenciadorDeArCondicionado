export class Views {
  static Home(): Promise<any> {
    return import('./Home/index.home.vue')
  } 
  static Register(): Promise<any> {
    return import('./Register/index.register.vue')
  } 
  static NotFound(): Promise<any> {
    return import('./NotFound/index.notfound.vue')
  } 
}

