function getProductsUrl (keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`
}
export function get (options) {
  const url = getProductsUrl('tes')
  return fetch(url, {
    method: 'GET'
  }).then(function (response) {

  }).catch((e) => {
    return [
      {
        action_url: '#',
        url: 'https://lh3.googleusercontent.com/-a8_8qvG48Wm-JZlzn-n2zV6gj3OlEzK8AMwdROwtktMi6I80tsPFxaEQe3CdSZpREwnqm_tz3ktIWGgg6xrTNI1PgK1YONkByzCavraiZqRSIz01KKMd0Qlr68k4nqtwskSnOnjASd07Ph2ovWHU0foXXthNVgVjWAmDDoG2VSU6ppy2Ky-1rAyCLjkcfx-9fepeZerWfZ1m5ro80MvWKUF92-z8IwRzn1eY7N4m8BL-3NmWdWe9eFBnbXBN87PFPAEjarWS_vYZK4sw91trkGj7t82VmKAozDeLt3z_ygAfAwmgPWux5gZ7Gbx9EJB9nfzRqkBDJFpuN_NqdgNMai2Vj5FVBKQyA9Vu-TIkl7eIi9uJnqoFrKTnVWGw14V-YMZNbThoNeb2pCeI-BX1BFwR3K_TjbylCnhkiy4az2LGguWOYejb7ZEDQZhGxnHgQ2ABWBks1TYATr2a701EyrTT0dkm4h071DA9opjNTo6nIfdmxvH-h6GMSYFv7KP8X5xZoAxRBB3kxn3KZkpShYT9AZaFkMQBtsOJFpubfmRzCONQ6Jm0TNxzD5KA4783PEmUiJAhSiNvHpGQibBrdqHZGvn1HgrDWFgiLH9KQp4UUJ3AmosBpVTwvb-Te5K9h_vKmY-lE81EgQXtgY-5CnonBgUPTJrcxAINQ6_qDCFbmEI4HGWFnRT2Qso=w1292-h970-no?authuser=4',
        objectFit: 'cover'
      },
      {
        action_url: '#',
        url: 'https://lh3.googleusercontent.com/e7zhkxJIOpVwWETN2aJZ0chN-AaYCE8uzN3RTUvHnotqKDZSYQ24WgyaDavd2Vj4XxChCu1nn6wMQDjWEOm_O3swi2Eu99RlB-uaI9mdVUAjNrrVAZCBhwgaOuCVUtrZeYTmBpuCrxZPN7hUSstLogZQBmOCFPzkubmcW2rnyjTYUpdITgnCdx8AIRAoRF0-LUiKP_00yEnNUgW1hGa-5MfSU_DzDzKmpLaq09R9bCg97vPJVE38tQwZU9lQNS1SWzCNH-0PB_swPEkxHj5tqZNFUeLYMji7vMG2KF8mchleKhcUYr-BHSzblS7wmFJXpVBGzrUvdXFyBIxh0r_ZWshYKQXqoQtBCUYKd7zZPK6_q05GpPj0K2tOU49lIC9pMWrg9aEH743YqZ1vw24VL4QoH8F8JPnSSpvw8gb9yTI0zl1aNgKkIrV1OI4Ev0dcrrAYY-OrIIJeqlYgGFaPfL9wSTwSQYVoP1gB_R8ZlXYJM0piIqGIFpHyFCGm3FH4X2ZCfFcBSIqeiAdUUZwCWkD5TPJRjNHeUMJiEU11Qi-CezwXNwB7Yw-QywKVaFSsHmgvP6p8yr0EMQ93cCsfv0SkadAlUoUpoGbcOaEptywu6D3DTo4hCTZsYXASqv0IgRA5DvFZ613oVxc6Yf1Flh_cuWTvZJZotApmu7UCpP1ZjwPWwVYsdoigXGG3=w1292-h970-no?authuser=4',
        objectFit: 'cover'
      },
      {
        action_url: '#',
        url: 'https://lh3.googleusercontent.com/g5lYvAfB5t7MvZa5KQovq2MNK8kTBfi3k5o8SeY_Xqog8lYiHWRuYKfuiqmlwCLIhmEWrEln5vysJeRAGEhSdIUJEIz-ufwtGV_0nJmnVvfzTt3qd0RRJX4oluZtzX2E-aHcWZCbhO5XZoIoE6gsIzZd1eQOu1h3WOkmvuz8TpsuJnlLdd0Iw80ivf3HSwwJNYEOuPL4CuaHLlWjVGBKH_58__bx1ubsW3QNfygq-BoTC3G6KnQ3QSXLVHZ9jvPxfZkDP1mm5fRCHPlaw7aHWVJcs5GtWI6UmsE9w7LKx5SxfkaRS5TEWXDSdua9hpWRaJ0Adk-om0iSpDzwI4muJN1XuEFNPq1nExV1rpRshbcEAIGwLF9-1rOpgtMFA3vE_xCKsw4w33CWYRM9O4PLmezwkeJAGCxWU5AQxlBXr4uWQBmCcuz08YFVEeATsMp3uj7XzJseQhgBr-NGPI6QBNo6VrTvDEU5qKCn8H6tu4LiN91ZUEM6WzEmNctf8JdTeK2VTpt6r4tUSC-xRcxUPuCUEClEZVR9mg1V6wVSwyS891BrDDZ1jsEEpkZNShrICZBoieGhueGQEfeN8awNOCnECS9D0grGnEdWlOip1ZMauCntgnWxvalwAZtJT0QkOOUXgvUPSf1W5av63JX_T4hTnjrIzbqMzoNiZwD3PbOVVDMmHy9_Rv3kVFc=w1292-h970-no?authuser=4',
        objectFit: 'cover'
      }
    ]
  })
}

export function getById (id) {
  // return db.collection('banners')
  //   .doc(id)
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       const data = doc.data()
  //       return {
  //         ...data,
  //         id: doc.id
  //       }
  //     }
  //     return null
  //   })
}
