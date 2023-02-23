type CentreName = string
type CentreParam = {
    name: string,
    value: string
}
type CentreParams = Array<CentreParam>

// declare interface CentreDataSet {
//     name: CentreName,
//     params: CentreParams
// }
declare interface CentreNameDataSet {
    name: CentreName
}
declare interface CentreParamsDataSet {
    params: CentreParams
}