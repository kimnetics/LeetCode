// https://leetcode.com/problems/time-based-key-value-store/
import java.util.ArrayList;
import java.util.HashMap;

class ValueWithTimestamp {
    public final int timestamp;
    public final String value;

    public ValueWithTimestamp(int timestamp, String value) {
        this.timestamp = timestamp;
        this.value = value;
    }
}

class TimeMap {
    private final HashMap<String, ArrayList<ValueWithTimestamp>> datastore;

    public TimeMap() {
        this.datastore = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        datastore.putIfAbsent(key, new ArrayList<>());
        datastore.get(key).add(new ValueWithTimestamp(timestamp, value));
    }

    public String get(String key, int timestamp) {
        ArrayList<ValueWithTimestamp> values = datastore.get(key);
        if (values == null) {
            return "";
        }

        return valueWithTimestamp(values, timestamp);
    }

    private String valueWithTimestamp(ArrayList<ValueWithTimestamp> values, int timestamp) {
        int left = 0;
        int right = values.size() - 1;
        int mid = 0;

        while (left <= right) {
            mid = (left + right) / 2;

            if (values.get(mid).timestamp == timestamp) {
                return values.get(mid).value;
            } else if (values.get(mid).timestamp < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (values.get(mid).timestamp < timestamp) {
            return values.get(mid).value;
        } else {
            if (mid == 0)
                return "";
            else if (values.get(mid - 1).timestamp < timestamp)
                return values.get(mid - 1).value;
            else
                return "";
        }
    }
}
