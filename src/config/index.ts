import { IRemoteConfig } from '../shared/interface/common';


let configs: IRemoteConfig | undefined;

export const initConfig = (): Promise<IRemoteConfig> => {
    return new Promise((resolve: any, reject: any) => {
        const remoteConfig = {
            'Content-Type': 'application/json'
        }
        const config: IRemoteConfig = {
            endpoint: 'http://165.22.103.200:8083',
            domain: 'http://165.22.103.200:8083',
            accessToken: '',
            adminUser: '',
            adminPassword: '',
            ...remoteConfig
        }
        configs = config;
        resolve(config);
    })
}

export const getBasicConfig = (): IRemoteConfig|undefined => {
    return configs;
}