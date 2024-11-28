let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  let img = 'https://imgur.com/a/BNd5eGA';
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  let messageContent = {
    text: 'ROYAL-BOT 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚', // Text content in case a message body is needed
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '© Royal death',
        body: '© Royal death',
        thumbnailUrl: img,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the message with the external ad reply
  await conn.sendMessage(m.chat, messageContent, { quoted: con });
};

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
