import ApiGateway from "../../../gateway/api";
import { getConfig } from "../../../setting";
import { NestjsResource } from "../../../gateway/api/resource";
import ResponseModel from "../../../../models/response";

const config = {
    endpoint: 'http://165.22.103.200:8083',
    domain: 'http://165.22.103.200:8083',
    accessToken: '7645dbab3206527a2d8120e1736fi4u44c',
    googleApiKey: 'AIzaSyDe2Kk6i-VPLHmGq-0_RH7JYk1QlaxSYMsI',
    adminPassword: '',
    adminUser: '',
    sitecoreApiKey: '7A3E0468-E733-4F81-AABE-2BC0E797E5E0',

  };

const getAll = (): Promise<ResponseModel<string>> => {
    const apiGateway = ApiGateway.createAPIConnection(config);

    const productResource = NestjsResource.Product.getAll();
    return apiGateway.doGetRequest(productResource).then((response) => {
        const {data} = response;
        return data;
    });
}

const getOne = (id: number) => {
    return {}
}
export default {
    getAll,
    getOne
}