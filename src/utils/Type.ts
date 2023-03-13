export interface DatasType{
    id: number
    name: string
    username: string
    address: catchPhrase
    company: CompanyType
    email: string
    phone: string
    website: string
  }

export interface catchPhrase{
    city: string
    geo: {
        lat: string
        lng: string
    }
    street: string
    suite: string
    zipcode: string
  }

export interface CompanyType{
    bs: string
    name: string
    catchPhrase: string
}