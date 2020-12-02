declare global {
  interface PluginRegistry {
    getMacAddress: getMacAddress;
  }
}

export interface getMacAddress {
  getMacAddress():Promise<any>;

  //echo(options: { value: string }): Promise<{ value: string }>;
}
