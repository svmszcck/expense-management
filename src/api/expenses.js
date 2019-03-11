import axios from 'axios';

export default {
  getExpenses: () => axios.get('/expenses'),
  checkInvitationHash: hash => axios.get(`/users/invite/${hash}`),
  setComment({ id, comment }) {
    return axios.post(`/expenses/${id}`, { comment });
  },
  postReceipts: id => axios.post(`/${id}/receipts`),
};
