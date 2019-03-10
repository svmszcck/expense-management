import axios from 'axios';

export default {
  getExpenses: () => axios.get('/expenses'),
  checkInvitationHash: hash => axios.get(`/users/invite/${hash}`),
  setComment({ id, comment }) {
    return axios.post(`/expenses/${id}`, { comment });
  },
  // setComment: ({ id, comment }) => axios.post(`/expenses/${id}`, { params }),
  postReceipts: id => axios.post(`/${id}/receipts`),
};
