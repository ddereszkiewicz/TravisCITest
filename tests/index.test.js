const request = require('supertest')
const app = require('../index.js')

describe('get endpoint', () => {
  it('should return get', async () => {
    const res = await request(app)
      .get('/')
      
    
    expect(res.body.mes).toEqual('get')
  })
})

describe('post endpoint', () => {
    it('should return post', async () => {
      const res = await request(app)
        .post('/')
        

      expect(res.body.mes).toEqual('post')
    })
  })

  describe('patch endpoint', () => {
    it('should return patch', async () => {
      const res = await request(app)
        .patch('/')
        
 
      expect(res.body.mes).toEqual('patch')
    })
  })
  describe('delete endpoint', () => {
    it('should return delete', async () => {
      const res = await request(app)
        .delete('/');
        

      expect(res.body.mes).toEqual('delete')
    })
  })