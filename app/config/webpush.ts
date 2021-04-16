import webpush from 'web-push';

const publicVapidKey = 'BBrX9faJjI6fnzLWb102Kmjn9w7q8xogB864Urp84NbljEz-FWD7lwe3gqwQgWBg2Zn9CIu2Tjm51O31MmalSXw';
const privateVapidKey = '_CprP8t4DFikcowAKEDDjXY8Nmm1Pbc1I2nygD9-PPs';

export default (): void => {
  webpush.setVapidDetails(
    'mailto:test@test.com',
    publicVapidKey,
    privateVapidKey,
  );
};
