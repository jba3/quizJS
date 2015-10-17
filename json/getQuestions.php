<?php
	include '../config.php';

	// new mysqli object
	$mysqli = new mysqli($DB_SERVER, $DB_USER, $DB_PASS, $DB_NAME);

	// query object for the questions
	$qryQuestions = $mysqli->query("SELECT `questionID`, `question`, `answer` FROM $DB_NAME.questions ORDER BY questions.questionID");

	// outer loop counter init
	$rowOuterCount = 0;

	// output in JSON format
	print "[";
	while($rowOuter = mysqli_fetch_assoc($qryQuestions)){
		// get the list of options for this question
		$qryOptions = $mysqli->query("SELECT `option` FROM options WHERE questionID = " . $rowOuter['questionID'] . " ORDER BY optionNumber");

		// handle counters
		$rowOuterCount += 1;
		$rowInnerCount = 0;

		// output in JSON notation
		print "{";
		print "\"question\": \"" . $rowOuter['question'] . "\",";
		print "\"options\": [";
		// options as an inner/nested query
		while($rowInner = mysqli_fetch_assoc($qryOptions)){
			$rowInnerCount += 1;

			print "\"" . $rowInner['option'] . "\"";

			// separate options with a comma, except for the last one
			if ($rowInnerCount < $qryOptions->num_rows){
				print ",";
			}
		}
		print "],";
		print "\"answer\": " . $rowOuter['answer'];
		print "}";

		// comma between questions, except for the last one
		if ($rowOuterCount < $qryQuestions->num_rows){
			print ",";
		}
	}
	print "]";

	// Close connection
	mysqli_close($con);
?>
