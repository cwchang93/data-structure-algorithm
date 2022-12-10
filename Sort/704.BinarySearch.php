class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer
 */
function search($nums, $target) {
    foreach($nums as $key => $value) {
        if ($value === $target) return $key;
    }
    return -1;
}
}
