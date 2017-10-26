
//Essa vai ser a classe que vai capturar todos os eventos
 public class DiscordListener extends ListenerAdapter
 {
  
    @Override
     public void onReady(ReadyEvent event)
     {
         //Quando o bot estiver pronto, ele vai printar no console que ele esta pronto
         System.out.println("I am ready to go!");
     }

    @Override
     public void onMessageReceived(MessageReceivedEvent event)
     {
        //Essa linha vai pegar o conteudo da mensagem
       String message = event.getMessage().getContent();
        
        //Se a mensagem começar com _ping...
        message.startsWith("_ping")) { 
          //Ele vai me responder com Pong!
              //É Importante deixar .queue();
          event.getTextChannel().sendMessage("Pong!").queue();
        }
     }
 }
