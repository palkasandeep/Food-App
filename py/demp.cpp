#include <bits/stdc++.h>
using namespace std;

int main()
{
  int t;
  cin >> t;
  while (t--)
  {
    int n, m;
    cin >> n >> m;

    string x, s;
    cin >> x >> s;

    int count = 1;
    string j = x;

    // Keep appending x until the size exceeds s.size()
    while (j.size() < s.size())
    {
      j += x;
      count++;
    }

    // Check if s is a substring
    if (j.find(s) != string::npos)
    {
      cout << count << endl;
      continue;
    }

    // Try one more repetition if not found
    j += x;
    count++;
    if (j.find(s) != string::npos)
    {
      cout << count << endl;
    }
    else
    {
      cout << -1 << endl;
    }
  }
  return 0;
}
