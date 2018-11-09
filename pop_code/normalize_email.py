class Solution():

    def numUniqueEmails(self, emails):
        """Return one unique email for a set of non-unique emails.

        >>> normalizer = Solution()

        >>> normalizer.numUniqueEmails(['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com'])
        2

        """

        normalized_emails = []
        for email in emails:
            normalized_email = self.normalize_unique_email(email);
            normalized_emails.append(normalized_email)

        #len is length / set is to eliminate any duplicates
        # len(set(normalized_emails))
        return len(set(normalized_emails))

    def normalize_unique_email(self, email):
        """Return an email without any dots in the local name

        >>> normalizer = Solution()

        >>> normalizer.normalize_unique_email('test.e.mail+bob.cathy@leetcode.com')
        'testemail@leetcode.com'
        """

        ###original code
        # email= email.split('@')
        # local_name = email[0].replace(".","")
        # domain_name = email[1]

           # new_email = local_name + '@' + domain_name


        ###destructuring assignment
        # local_name, domain_name = email.split('@')
        # local_name = domain_name.replace(".","")


        email= email.split('@')
        local_name = email[0].replace(".","")
        domain_name = email[1]
        local_name = local_name.split('+')
        local_name = local_name[0]

        new_email = local_name + '@' + domain_name


            # print(new_email)

        return new_email


if __name__ == "__main__":
    import doctest
    doctest.testmod()