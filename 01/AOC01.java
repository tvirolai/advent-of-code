import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class AOC01 {
  	public static void main(String[] args) {
   		ArrayList<Integer> data = readFile("input.txt");
   		System.out.println("Part 1: " + part1(data));
   		System.out.println("Part 2: " + part2(data));
  	}

  	public static ArrayList<Integer> readFile(String fileName) {
		ArrayList<Integer> data = new ArrayList<>();
		try (Scanner lukija = new Scanner(new File(fileName))) {
	  		while (lukija.hasNextLine())  {
				String line = lukija.nextLine();
				for (int i = 0; i < line.length(); i++) {
		  			if (line.charAt(i) == '(') {
						data.add(1);
		  			} else if (line.charAt(i) == ')') {
		  				data.add(-1);
		  			}
				}
	  		}
		} catch (Exception e) {
	  		System.out.println(e.getMessage());
		}
		return data;
  	}

  	public static int part1(ArrayList<Integer> data) {
  		int sum = 0;
  		for (int i : data) {
  			sum += i;
  		}
  		return sum;
  	}

  	public static int part2(ArrayList<Integer> data) {
  		int sum = 0;
  		int i = 0;
  		for (i = 0; i < data.size(); i++) {
  			sum += data.get(i);
  			if (sum == -1) {
  				break;
  			}
  		}
  		return i + 1;
  	}
}
