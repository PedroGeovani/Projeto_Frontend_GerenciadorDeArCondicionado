export class Views {
  static Home(): Promise<any> {
    return import('./Home/index.home.vue')
  } 
  static Register(): Promise<any> {
    return import('./Register/index.register.vue')
  } 
}

