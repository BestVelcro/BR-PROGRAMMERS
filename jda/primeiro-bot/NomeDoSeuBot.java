
//Esta implementando o EventListener, Essa sera a classe "Principal do seu bot"
public class NomeDoSeuBot  {

 //Isso registra como sua classe principall
 public static void main(String[] args)
            throws LoginException, RateLimitedException, InterruptedException
    {
        //Aqui e para ligar seu bot
                                //E Importante Colocar Como AccountType.BOT para que a api possa saber que não e um selfbot
        JDA jda = new JDABuilder(AccountType.BOT)
            .setToken("token")
            .addEventListener(DiscordListener())
            .buildBlocking();
    }
    

}
