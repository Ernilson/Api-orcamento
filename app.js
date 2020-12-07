const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('./models/Cont');
const Orcamento = mongoose.model('Cont');

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});


mongoose.connect('mongodb://localhost:27017/orcamento', {
    useNewUrlPaser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso!")
}).catch((err) => {
    console.log("Algo deu errado!", + err)
})

app.post('/orcamento', async (req, res) => {
    await Orcamento.create(req.body, (err) => {

        if (err) return res.status(400).json({
            error: true,
            message: "Erro: sem houve algum problema!"
        });
    });

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
            user: "14ee08383ef61d",
            pass: "f90554d0766059"
        }
    });

    var emailHtml = 'teste<br><br> para receber mensagens<br><br> mais mensagens';

    var emailTexto = 'teste /n/n/ para receber mensagens /n/n/ mais mensagens';

    var emailSendInfo = {
        from: '"eb656c3f0f-5d2a1a@inbox.mailtrap.io',
        to: req.body.email,
        subject: "Recebi sua solicitação de orçamento, respondo assim que possivel",
        text: emailTexto,
        html: emailHtml,
    }

    await transport.sendMail(emailSendInfo, function (err) {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: sem houve algum problema!"
        });

        return res.json({
            error: false,
            message: "Solicitação enviada com sucesso!"
        });

    });


})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});