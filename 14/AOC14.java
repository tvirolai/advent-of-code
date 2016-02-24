import java.util.ArrayList;

public class AOC14 {

    public static void main(String[] args) {

        System.out.println(part1() + "\n" + part2());

    }

    public static String part1() {
        ArrayList<Reindeer> reindeer = initializeReindeer();

        for (int i = 0; i < 2503; i++) {
            for (Reindeer beast : reindeer) {
                beast.moveOne();
            }
        }

        int winningDistance = 0;
        String winningName = "";

        for (Reindeer beast : reindeer) {
            if (beast.returnDistance() > winningDistance) {
                winningDistance = beast.returnDistance();
                winningName = beast.getName();
            }
        }
        
        return "Part 1: " + winningDistance + " (" + winningName + ")";
    }

    public static String part2() {
        ArrayList<Reindeer> reindeer = initializeReindeer();

        int winningDistance = 0;
        String winningName = "";

        for (int i = 0; i < 2503; i++) {

            winningDistance = 0;
            winningName = "";

            for (Reindeer beast : reindeer) {
                beast.moveOne();
                if (beast.returnDistance() > winningDistance) {
                    winningDistance = beast.returnDistance();
                    winningName = beast.getName();                    
                }
            }

            for (Reindeer beast : reindeer) {
                if (beast.returnDistance() == winningDistance) {
                    beast.addPoint();
                }
            }
        }

        int winningPoints = 0;
        
        for (Reindeer beast : reindeer) {
            if (beast.getPoints() > winningPoints) {
                winningPoints = beast.getPoints();
                winningName = beast.getName();
            }
        }

        return "Part 2: " + winningPoints + " (" + winningName + ")";
    }

    public static ArrayList<Reindeer> initializeReindeer() {
        ArrayList<Reindeer> reindeer = new ArrayList<>();
        Reindeer vixen = new Reindeer("Vixen", 19, 7, 124);
        reindeer.add(vixen);
        Reindeer rudolph = new Reindeer("Rudolph", 3, 15, 28);
        reindeer.add(rudolph);
        Reindeer donner = new Reindeer("Donner", 19, 9, 164);
        reindeer.add(donner);
        Reindeer blitzen = new Reindeer("Blitzen", 19, 9, 158);
        reindeer.add(blitzen);
        Reindeer comet = new Reindeer("Comet", 13, 7, 82);
        reindeer.add(comet);
        Reindeer cupid = new Reindeer("Cupid", 25, 6, 145);
        reindeer.add(cupid);
        Reindeer dasher = new Reindeer("Dasher", 14, 3, 38);
        reindeer.add(dasher);
        Reindeer dancer = new Reindeer("Dancer", 3, 16, 37);
        reindeer.add(dancer);
        Reindeer prancer = new Reindeer("Prancer", 25, 6, 143);
        reindeer.add(prancer);
        return reindeer;
    }
}