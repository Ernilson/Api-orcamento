import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const orcamento = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },

    telefone: {
        type: String
    },
    whatsApp: {
        type: String
    },
    msg: {
        type: String
    },
},{
    timestamps: true
  });

  mongoose.model('Cont', orcamento);